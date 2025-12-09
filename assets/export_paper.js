// import fs from 'fs';
// If running in a browser or server environment without direct file system access,
// you should fetch the files via HTTP requests or use appropriate APIs.
import yaml from "https://unpkg.com/js-yaml@4/dist/js-yaml.mjs";

const [
  authors_yml,
  venues_yml,
  international_confs_papers_yml,
  domestic_confs_papers_yml,
  preprints_yml
] = await Promise.all([
  fetch('/data/authors.yml').then(r => r.text()),
  fetch('/data/venues.yml').then(r => r.text()),
  fetch('/data/international_c_papers.yml').then(r => r.text()),
  fetch('/data/domestic_c_papers.yml').then(r => r.text()),
  fetch('/data/preprints.yml').then(r => r.text())
]);

const venues = yaml.load(venues_yml);
// const venues = Array.isArray(venuesRaw) ? venuesRaw : Object.values(venuesRaw);
const authors = yaml.load(authors_yml);
// const authors = Array.isArray(authorsRaw) ? authorsRaw : Object.values(authorsRaw);
const international_confs_papers = yaml.load(international_confs_papers_yml);
const domestic_confs_papers = yaml.load(domestic_confs_papers_yml);
const preprints = yaml.load(preprints_yml);

const params = new URLSearchParams(window.location.search);
const lang = params.get('lang') || 'en';

console.log("Data loaded.");
console.log(`Loaded ${authors.length} authors.`);
console.log(`Loaded ${venues.length} venues.`);
console.log("Venues content:", venues);
console.log("Authors content:", authors);
console.log(`Loaded ${international_confs_papers.length} international conference papers.`);
console.log(`Loaded ${domestic_confs_papers.length} domestic conference papers.`);
console.log(`Loaded ${preprints.length} preprints.`);

function getAuthorName(authorEnt, lang='en') {
    const authorKey = authorEnt.name;
    if (lang == 'en') {
        const author = authors[authorKey];
        return author ? author.name : authorKey;
    } else if (lang == 'jp') {
        const author = authors[authorKey];
        return author ? (author.name_jp || authorEnt.name_jp || author.name) : (authorEnt.name_jp || authorKey);
    }
}

function getVenueName(venueKey, lang='en') {
    if (lang == 'en') {
        const venue = venues[venueKey];
        return venue ? venue.name : venueKey;
    } else if (lang == 'jp') {
        const venue = venues[venueKey];
        return venue ? (venue.name_jp || venue.name) : venueKey;
    }
}

function getVenueShortName(venueKey) {
    const venue = venues[venueKey];
    return venue && venue.short ? venue.short : '';
}

function serializePaper(paper, lang='en', preprints=false) {
    if (lang == 'en') {
        const authorNames = paper.authors.map(a => getAuthorName(a, 'en')).join(', ');
        if (preprints) {
            return `${authorNames}. "${paper.title}". Pre-print. ${paper.year}.\n`;
        } else {
            const venueName = getVenueName(paper.venue);
            const venueShortName = getVenueShortName(paper.venue);
            if (venueShortName && venueShortName.length > 0) {
                return `${authorNames}. "${paper.title}". ${venueName} (${venueShortName}). ${paper.year}.\n`;
            } else {
                return `${authorNames}. "${paper.title}". ${venueName}. ${paper.year}.\n`;
            }
        }
    } else if (lang == 'jp') {
        console.log("Generating export in Japanese...");
        console.log("Paper data:", paper);
        const authorNames = paper.authors.map(a => getAuthorName(a, 'jp')).join(', ');
        if (preprints) {
            return `${authorNames}. "${paper.title}". Pre-print. ${paper.year}.\n`;
        } else {
            const venueName = getVenueName(paper.venue, 'jp');
            const venueShortName = getVenueShortName(paper.venue);
            if (venueShortName && venueShortName.length > 0) {
                return `${authorNames}. "${paper.title}". ${venueName} (${venueShortName}). ${paper.year}.\n`;
            } else {
                return `${authorNames}. "${paper.title}". ${venueName}. ${paper.year}.\n`;
            }
        }
    }
}

window.generateExportPaper = async function generateExportPaper(lang='en') {
    console.log("Generating export...");
    // International_papers
    let counter = 1;
    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false
    });
    let string = `Publication List at ${formattedDate}\n\n`;
    string += '## International Conference Papers\n\n';
    international_confs_papers.forEach(paper => {
        string += `${counter}. ${serializePaper(paper)}`;
        counter++;
    }
    );
    // Preprints
    string += '\n## Preprints\n\n';
    preprints.forEach(paper => {
        string += `${counter}. ${serializePaper(paper, 'en', true)}`;
        counter++;
    });
    // Domestic_papers
    string += '\n## Domestic Conference Papers / Journals / Miscellaneous\n\n';
    if (lang === 'en') {
        domestic_confs_papers.forEach(paper => {
            string += `${counter}. ${serializePaper(paper)}`;
            counter++;
        });
    } else if (lang === 'jp') {
        domestic_confs_papers.forEach(paper => {
            string += `${counter}. ${serializePaper(paper, 'jp')}`;
            counter++;
        });
    }
    // Download as TXT file
    const blob = new Blob([string], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = lang === 'en' ? 'publication_list.txt' : '論文一覧.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Also show the export string in the page
    let exportDiv = document.getElementById('export-paper-content');
    if (!exportDiv) {
        exportDiv = document.createElement('div');
        exportDiv.id = 'export-paper-content';
        exportDiv.style.whiteSpace = 'pre-wrap';
        document.body.appendChild(exportDiv);
    }
    exportDiv.textContent = string;
}

generateExportPaper(lang);

// document.addEventListener('DOMContentLoaded', () => {
//   const link = document.getElementById('export-link');
//   if (!link) {
//     console.error('export-link not found');
//     return;
//   }
//   link.addEventListener('click', (e) => {
//     e.preventDefault();
//     generateExportPaper();
//   });
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const linkJp = document.getElementById('export-link-jp');
//   if (!linkJp) {
//     console.error('export-link-jp not found');
//     return;
//   }
//   linkJp.addEventListener('click', (e) => {
//     e.preventDefault();
//       generateExportPaper('jp');
//     });
// });