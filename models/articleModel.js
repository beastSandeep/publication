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
  orcid: {
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
        "review_paper",
        "research_paper",
        "case_report",
        "book_review",
        "short_communication",
        "conference_proceedings",
      ],
    },

    subject: {
      type: String,
      trim: true,
    },
    country: {
      type: String,
      enum: ["india"],
      trim: true,
    },

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

    aimOfStudy: {
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
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december",
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
