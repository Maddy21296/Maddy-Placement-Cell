const Json2csvParser = require("json2csv").parse;

//convert the student data to json and downlaod the json to a CSV file
async function convertJson2CSV(data) {
  return await ConvertToCSV(JSON.stringify(data), {
    fields: [
      "Batch",
      "Name",
      "Email-Id",
      "Mobile No.",
      "College Name",
      "Placement Status",
      "DSA_marks",
      "Web_Dev marks",
      "React marks",
      "Interview Status",
    ],
    unwind: "interview",
  });
}

// return converted file for download
function ConvertToCSV(json, fields) {
  let options = {};

  options = fields;

  const csv = Json2csvParser(JSON.parse(json), options);
  return csv;
}

module.exports = {
  convertJson2CSV: convertJson2CSV,
};
