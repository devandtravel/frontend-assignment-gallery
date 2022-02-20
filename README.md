## Комментарии по заданию (задание ниже)

1. API запросы и получение данных с сервера в стор реализованы с помощью RTK Query. Выбрал актуальный инструмент, позволяющий масштабировать приложение. Преимущества RTK Query: кэширование результатов запросов, отсутствие дублирующих запросов, возможность инициировать периодические запросы.

2. API jsonplaceholder поддерживает пагинацию, поэтому я использовал эту возможность, чтобы не получать сразу все данные на фронт и не нарезать их на страницы, что уменьшает траффик, повышает скорость ответа сервера и отрисовки.

3. API jsonplaceholder поддерживает получение запроса на удаление DELETE, но реального удаления данных на сервере не происходит.
   fetch('https://jsonplaceholder.typicode.com/photo/1', {
   method: 'DELETE',
   });
   Тем не менее я реализовал отправку DELETE и GET при нажатии на кнопку удаления фото, как это было бы при нормально работающем API. При этом на фронте сохраняются результаты действий обновления/сортировки, поэтому данные отрисовываются так, как будто с API пришли обновления.

## Задание

Создать приложение на React. Можно использовать разные шаблоны (Material UI).

Что нужно сделать:

- Создать приложение, где нужно вывести через Rest API данные (можно плиткам) (Ссылка на данные - http://jsonplaceholder.typicode.com/photos);

- Сделать постраничный вывод картинок;

- Сделать кнопку удаления картинки;

- При нажатии выводить модалку с увеличенной картинок (для списка - thumbnailUrl, для модалки - url);

- Сделать возможность сортировки по айдишнику альбома (albumId), сделать может быть селектор или же просто вывести над списком все айдишники и при нажатии делать фильтрацию.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
