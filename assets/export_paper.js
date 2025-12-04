const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const authors_yml = fs.readFileSync(path.join(__dirname, '../_data/authors.yml'), 'utf8');
const venues_yml = fs.readFileSync(path.join(__dirname, '../_data/venues.yml'), 'utf8');
const international_confs_papers_yml = fs.readFileSync(path.join(__dirname, '../_data/international_c_papers.yml'), 'utf8');
const domestic_confs_papers_yml = fs.readFileSync(path.join(__dirname, '../_data/domestic_c_papers.yml'), 'utf8');
const preprints_yml = fs.readFileSync(path.join(__dirname, '../_data/preprints.yml'), 'utf8');

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