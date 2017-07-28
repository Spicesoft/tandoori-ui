## JS ENV
npm install

## tests and coverage
npm run test

## install codecov
bash <(curl -s https://codecov.io/bash) -t 3ff2073c-d9e0-4ab6-92d3-3ff38b68d9de

# ------ COVERAGE UPLOAD ------
codecov --token=3ff2073c-d9e0-4ab6-92d3-3ff38b68d9de --file static/js/coverage/lcov.info
