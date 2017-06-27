const agegrade = require('./agegrade.js');

module.exports = function (context, req) {
    context.log('Age Grade Request');

    var isMale = (req.query.gender.toLowerCase()=='male' || req.query.gender.toLowerCase()=='m') ? true : false;
    var distance = parseFloat(req.query.distance);
    var age = parseFloat( req.query.age );
    var resultTime = parseInt(req.query.resultTime);

    var ageGradeResult = agegrade.calcAgeGradeResult( isMale, "2015", distance, age, resultTime )

    var logText = `Request: {gender: ${req.query.gender}, age: ${age}, distance: ${distance}, resultTime: ${resultTime}}`;
    logText += "\n"
    logText += `Response: { factor: ${ageGradeResult.factor}, openStandard: ${ageGradeResult.openStandard}, ageGradeStandard: ${ageGradeResult.ageGradeStandard}, ageGradeResultTime: ${ageGradeResult.ageGradeResultTime}, ageGradePercentage: ${ageGradeResult.ageGradePercentage}`;
    context.log( logText );

    context.res = {
        status: 200,
        body: ageGradeResult,
        headers: {
            'Content-Type': 'application/json'
        }
    };


    

    context.done();
};
