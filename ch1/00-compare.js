// 일반 객체지향 언어 코딩
function showStudent(ssn) {
    let student = db.find(ssn);

    if (student !== null) {
        document.querySelector(`#${elementId}`).innerHTML = `${student.ssn}`
    }
    else {
        throw new Error('학생을 찾을 수 없습니다.');
    }
}

// 긴 함수를 하나의 목적을 가진 짧은 함수로 분리
// 함수가 해야 할 작업에 필요한 인수를 모두 명시하여 부수효과 개수 줄이기

const find = curry((db, id) => {
    let obj = db.find(id);
    if (obj === null) {
        throw new Error('객체를 찾을 수 없습니다.');
    }
    return obj;
});

const csv = student => `${student.ssn}, ${student.firstname}, ${student.lastname}`;

const append = curry((selector, info) => {
    document.querySelector(selector).innerHTML = info;
}
);

/**
 * 이제 훨씬 재사용이 용이하며,
 * 가독성이 향상.
 * 순수한 함수와 순수하지 않은 함수를 분리
 */

// 참조투명성: 함수의 반환값이 그 입력값만으로 결정되는 성질