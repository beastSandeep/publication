const validator = require("validator");
const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  affiliation: {
    type: String,
    trim: true,
  },
  orcidId: {
    type: String,
    trim: true,
  },
});

const ArticleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    authors: [authorSchema],

    articleType: {
      type: String,
      enum: [
        "Review Paper",
        "Research Paper",
        "Case Report",
        "Book Review",
        "Short Communication",
        "Conference Proceedings",
      ],
    },

    subject: String,
    country: String,

    receivedDate: Date,
    acceptedDate: Date,
    revisedDate: Date,
    publishedDate: Date,

    abstract: {
      type: String,
      maxlength: 4000,
    },

    keywords: [String],

    introduction: {
      type: String,
      maxlength: 4000,
    },

    aimObjectives: {
      type: String,
      maxlength: 4000,
    },

    methods: {
      type: String,
      maxlength: 4000,
    },

    discussion: {
      type: String,
      maxlength: 4000,
    },

    conclusion: {
      type: String,
      maxlength: 4000,
    },

    references: {
      type: String,
      maxlength: 4000,
    },

    doi: String,

    month: {
      type: String,
      enum: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },

    referenceNo: String,
    year: Number,

    volume: String,
    issue: String,
    pageNo: String,

    fileName: String,
    filePath: String,
  },
  {
    timestamps: true,
  },
);

const Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;

// {
//   "title": "AI in Healthcare",
//   "authors": [
//     {
//       "name": "John Doe",
//       "affiliation": "Harvard University",
//       "orcidId": "0000-0002-1825-0097"
//     },
//     {
//       "name": "Jane Smith",
//       "affiliation": "MIT",
//       "orcidId": "0000-0003-2234-8899"
//     }
//   ],
//   "articleType": "Research Paper",
//   "subject": "Artificial Intelligence",
//   "country": "USA",
//   "receivedDate": "2026-03-07",
//   "acceptedDate": "2026-03-10",
//   "keywords": ["AI","Healthcare"],
//   "volume": "12",
//   "issue": "2",
//   "year": 2026
// }
