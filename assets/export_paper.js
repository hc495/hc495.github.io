// import fs from 'fs';
// If running in a browser or server environment without direct file system access,
// you should fetch the files via HTTP requests or use appropriate APIs.
import path from 'path';
import yaml from 'js-yaml';

import fileURLToPath from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const authors_yml = await fetch(path.join('/_data/authors.yml')).then(res => res.text());
const venues_yml = await fetch(path.join('/_data/venues.yml')).then(res => res.text());
const international_confs_papers_yml = await fetch(path.join('/_data/international_c_papers.yml')).then(res => res.text());
const domestic_confs_papers_yml = await fetch(path.join('/_data/domestic_c_papers.yml')).then(res => res.text());
const preprints_yml = await fetch(path.join('/_data/preprints.yml')).then(res => res.text());
// const authors_yml = fs.readFileSync(path.join(__dirname, '../_data/authors.yml'), 'utf8');
// const venues_yml = fs.readFileSync(path.join(__dirname, '../_data/venues.yml'), 'utf8');
// const international_confs_papers_yml = fs.readFileSync(path.join(__dirname, '../_data/international_c_papers.yml'), 'utf8');
// const domestic_confs_papers_yml = fs.readFileSync(path.join(__dirname, '../_data/domestic_c_papers.yml'), 'utf8');
// const preprints_yml = fs.readFileSync(path.join(__dirname, '../_data/preprints.yml'), 'utf8');

const authors = yaml.load(authors_yml);
const venues = yaml.load(venues_yml);
const international_confs_papers = yaml.load(international_confs_papers_yml);
const domestic_confs_papers = yaml.load(domestic_confs_papers_yml);
const preprints = yaml.load(preprints_yml);


function getAuthorNames(authorKey) {
    const author = authors.find(a => a.key === authorKey);
    return author ? author.name : authorKey;
}

function getVenueName(venueKey) {
    const venue = venues.find(v => v.key === venueKey);
    return venue ? venue.name : venueKey;
}

function serializePaper(paper) {
    const authorNames = paper.authors.map(getAuthorNames).join(', ');
    const venueName = getVenueName(paper.venue);
    return `${authorNames}. ${paper.title}. ${venueName}. ${paper.year}\n`;
}

function generateExportPaper() {
    // International_papers
    let counter = 1;
    let string = '## International Conference Papers\n\n';
    international_confs_papers.forEach(paper => {
        string += `${counter}. ${serializePaper(paper)}`;
        counter++;
    }
    );
    // Preprints
    string += '\n## Preprints\n\n';
    preprints.forEach(paper => {
        string += `${counter}. ${serializePaper(paper)}`;
        counter++;
    });
    // Domestic_papers
    string += '\n## Domestic Conference Papers\n\n';
    domestic_confs_papers.forEach(paper => {
        string += `${counter}. ${serializePaper(paper)}`;
        counter++;
    });
    return string;
}

// fs.writeFileSync(path.join(__dirname, 'exported_papers.txt'), generateExportPaper());