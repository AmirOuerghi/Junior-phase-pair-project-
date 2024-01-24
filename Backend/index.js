const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/database.js'); 
const app = express();
const PORT = 5000;
const cors =require('cors')


app.use(bodyParser.json());
app.use(cors())


app.post('/jobpostings', async (req, res) => {
    const { title, description, budget, skillsRequired, deadline, posterName, posterPic } = req.body;
    const newJob = await db.createJobPosting(title, description, budget, skillsRequired, deadline, posterName, posterPic);

    if (newJob) {
        res.status(201).json(newJob);
    } else {
        res.status(500).json({ error: 'Failed to create job posting' });
    }
});

app.get('/jobpostings/:jobTitle', async (req, res) => {
    const jobTitle = req.params.jobTitle;
    const job = await db.getJobPostingByTitle(jobTitle);

    if (job) {
        res.json(job);
    } else {
        res.status(404).json({ error: 'Job posting not found' });
    }
});

app.get('/jobpostings', async (req, res) => {
    const allJobPostings = await db.getAllJobPostings();

    if (allJobPostings) {
        res.json(allJobPostings);
    } else {
        res.status(500).json({ error: 'Failed to retrieve job postings' });
    }
});

app.put('/jobpostings/:jobTitle', async (req, res) => {
    const jobTitle = req.params.jobTitle;
    const updatedFields = req.body;
    const updatedJob = await db.updateJobPostingByTitle(jobTitle, updatedFields);

    if (updatedJob) {
        res.json(updatedJob);
    } else {
        res.status(500).json({ error: 'Failed to update job posting' });
    }
});

app.delete('/jobpostings/:jobTitle', async (req, res) => {
    const jobTitle = req.params.jobTitle;
    const deletedJob = await db.deleteJobPostingByTitle(jobTitle);

    if (deletedJob) {
        res.json(deletedJob);
    } else {
        res.status(500).json({ error: 'Failed to delete job posting' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

