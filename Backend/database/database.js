const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/freelanceApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to the database')
});

const jobPostingSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    budget: { type: Number, required: true },
    skillsRequired: [{ type: String, required: true }],
    deadline: { type: Date, required: true },
    poster: {
        name: { type: String, required: true },
        pic: { type: String, required: true },
    },
});

const JobPosting = mongoose.model('JobPosting', jobPostingSchema);

// Create (C)
async function createJobPosting(title, description, budget, skillsRequired, deadline, posterName, posterPic) {
    const newJob = new JobPosting({
        title: title,
        description: description,
        budget: budget,
        skillsRequired: skillsRequired,
        deadline: deadline,
        poster: {
            name: posterName,
            pic: posterPic,
        },
    });

    try {
        await newJob.save();
        console.log(`Job posting created with ID: ${newJob._id}`);
        return newJob;
    } catch (err) {
        console.error(err);
        return null;
    }
}

// Read (R)
async function getJobPostingByTitle(title) {
    try {
        const job = await JobPosting.findOne({ title: title });
        return job;
    } catch (err) {
        console.error(err);
        return null;
    }
}

// Read all (R)
async function getAllJobPostings() {
    try {
        const jobPostings = await JobPosting.find();
        return jobPostings;
    } catch (err) {
        console.error(err);
        return null;
    }
}

// Update (U) using title
async function updateJobPostingByTitle(title, updatedFields) {
    try {
        const result = await JobPosting.findOneAndUpdate({ title: title }, updatedFields, { new: true });
        console.log(`Job posting updated successfully`);
        return result;
    } catch (err) {
        console.error(err);
        return null;
    }
}

// Delete (D) using title
async function deleteJobPostingByTitle(title) {
    try {
        const result = await JobPosting.findOneAndDelete({ title: title });
        console.log(`Job posting deleted successfully`);
        return result;
    } catch (err) {
        console.error(err);
        return null;
    }
}

module.exports = {
    createJobPosting,
    getJobPostingByTitle, 
    getAllJobPostings,
    updateJobPostingByTitle, 
    deleteJobPostingByTitle, 
};
