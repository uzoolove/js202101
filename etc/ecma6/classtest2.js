var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ex06-08.js 복사
// 고등학교 성적관리 클래스(총점과 평균 계산)
var HighSchool = /** @class */ (function () {
    function HighSchool(kor, eng) {
        this.kor = kor;
        this.eng = eng;
    }
    HighSchool.prototype.sum = function () {
        return this.kor + this.eng;
    };
    ;
    HighSchool.prototype.avg = function () {
        return Math.round(this.sum() / 2);
    };
    ;
    return HighSchool;
}());
var s1 = new HighSchool(100, 91);
console.log(s1.sum());
console.log(s1.avg());
// 대학교 성적관리 클래스(총점, 평균과 학점 계산)
var College = /** @class */ (function (_super) {
    __extends(College, _super);
    function College(kor, eng) {
        return _super.call(this, kor, eng) || this;
    }
    College.prototype.grade = function () {
        var grade = 'F';
        var avg = this.avg();
        if (avg >= 90) {
            grade = 'A';
        }
        else if (avg >= 80) {
            grade = 'B';
        }
        else if (avg >= 70) {
            grade = 'C';
        }
        else if (avg >= 60) {
            grade = 'D';
        }
        return grade;
    };
    ;
    return College;
}(HighSchool));
var s2 = new College(80, 71);
console.log(s2.sum());
console.log(s2.avg());
console.log(s2.grade());
