// export modules.
module.exports = {
    root: true,
    env: {
        node: true,
        commonjs: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    plugins: [],
    globals: {},
    rules: {
        /******************/
        /* Prettier Rules */
        /******************/
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-tabs': 'error',
        'space-in-parens': ['error', 'never'], // 괄호안 양끝에 공백 삽입
        'arrow-parens': ['error', 'always'], // 화살표 함수에 사용되는 파람은 항상 ()로 묶음
        'comma-dangle': ['error', 'always-multiline'], // prettier trailingComma
        /*******************************/
        /* Prettier Rules - Formatting */
        /*******************************/
        'array-bracket-spacing': ['error', 'never'], // 배열 브라켓([]) 내부 좌우에 공백 삽입
        'arrow-spacing': ['error', { before: true, after: true }], // 화살표 좌우에 공백
        'comma-spacing': ['error', { before: false, after: true }], // 콤마 좌측에는 공백 없고 우측에는 1개
        'computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
        'func-call-spacing': ['error', 'never'], // 함수호출시 공백허용하지 않음 (func (): x, func(): o)
        'generator-star-spacing': ['error', { before: true, after: true }], // Generator 쓸때 star sign 앞뒤 공백
        'key-spacing': ['error', { beforeColon: false, afterColon: true }], // 콜론 왼쪽 공백없고 오른쪽 한칸 여백
        'keyword-spacing': ['error', { before: true, after: true }], // 키워드 사용(if, else, 등등)시 좌우 공백
        'object-curly-spacing': ['error', 'always'], // 객체({}) 내부 좌우 빈공백 삽입
        'rest-spread-spacing': ['error', 'never'], // rest 사용시 공백 허용하지 않음
        'semi-spacing': ['error', { before: false, after: true }], // 세미콜론 좌측에 공백 없고 우측에는 허용
        'template-curly-spacing': ['error', 'never'], // 템플릿 문자열 주위에 공백 허용하지 않음
        'template-tag-spacing': ['error', 'never'], // 템플릿 태그 주위에 공백 허용하지 않음
        'yield-star-spacing': ['error', 'both'], // yield star sign 주위에 한칸 공백 둠
        'space-before-blocks': ['error', 'always'], // 블록 구문전에 빈 공백 한칸 삽입
        'space-infix-ops': 'error', // 중위 연산자 주위에 공백 필요
        // 주석 달때 일정하게 공백을 둠
        'spaced-comment': ['error', 'always', {
            line: { markers: ['*package', '!', '/', ',', '='] },
            block: {
                balanced: true,
                markers: ['*package', '!', ',', ':', '::', 'flow-include'],
                exceptions: ['*'],
            },
        }],
        'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }], // 처음 두 개와 같은 객체 리터럴이 같은 줄에 있는 모든 속성 사양과 함께 허용
        'no-multi-spaces': ['error', {
            ignoreEOLComments: true, // 끝나는 주석앞에 여러개공백 허옹.
            exceptions: {
                VariableDeclarator: true,   // 변수선언할때 허용.
                AssignmentExpression: true, // 할당문에 허용.
                // BinaryExpression: true,     // binary 연산자에 허용.
            },
        }],
        'no-multi-str': 'error', // 여러줄의 스트링 문자열을 허용하지 않음
        'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }], // 여러개의 빈줄 허용하지 않음
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }], // 클래스 멤버 사용시 메소드 사이에 한줄 허용
        'multiline-ternary': ['error', 'always-multiline'], // 삼항 연산자에서 중간에 줄바꿈을 할 경우 삼항 전부 줄바꿈 처리
        /*****************/
        /* General Rules */
        /*****************/
        'one-var': ['error', { initialized: 'never' }], // 한줄에 변수 한개 정의. 콤마를 이용해서 변수 정의시 에러
        // eqeqeq: 'error', // 동치 연산 허용 불가, 일치 연산만 허용
        curly: ['error', 'multi-line'], // if 조건 한줄처리할때만 블럭 없어도됨
        'dot-location': ['error', 'property'], // 점 전후에는 일관된 개행 시행
        'dot-notation': 'error', // 필요할때만  점 표기법 허용
        'default-case': 'error', // switch case 사용시 default case 필수
        'no-empty': 'off', // {} 처럼 빈 블락이 있을때 오류낼꺼냐?
        'no-unused-vars': ['error',
            { args: 'none', ignoreRestSiblings: true, destructuredArrayIgnorePattern: '^_' },
        ],
        'quote-props': ['error', 'as-needed'], // object 에서 props 에 쌍따옴표를 어떻게 할꺼냐?
        'prefer-const': ['error', { destructuring: 'all' }], // const 키워드 사용권장 하고 destructuring 할때 강제할꺼냐? 말꺼냐?
        'prefer-template': 'error',
        'prefer-arrow-callback': 'error',
        'no-var': 'error', // Require let or const instead of var
    },
};
