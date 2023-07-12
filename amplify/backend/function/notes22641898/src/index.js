const helloNpm = require("@elastik/elastik-fuzzy-name-matching");

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    console.log(
        helloNpm.matchStudentByNameUsingIndexes(
          { firstName: "added", lastName: "added", birthDate: "2023-09-08" },
          [
            { firstName: "", lastName: "", birthDate: "" },
            { firstName: "", lastName: "", birthDate: "" },
            { firstName: "", lastName: "", birthDate: "" },
          ]
        )
      );
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
        body: JSON.stringify('Hello from Lambda!'),
    };
};
