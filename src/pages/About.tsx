import { Box, Link, Typography } from '@mui/material'

export const About = () => {
  return (
    <Box sx={{ m: 4 }}>
      <Typography variant='h5' component='h2'>
        Задание
      </Typography>
      <br />
      <Typography>
        Создать приложение на React. Можно использовать разные шаблоны (Material
        UI).
      </Typography>

      <Typography>Что нужно сделать:</Typography>

      <Typography component='ul'>
        <Typography component='li'>
          Создать приложение, где нужно вывести через Rest API данные (можно
          плитками) (ссылка на данные -
          <Link
            href='http://jsonplaceholder.typicode.com/photos'
            target='_blank'
            rel='noreferrer'>
            http://jsonplaceholder.typicode.com/photos
          </Link>
          ).
        </Typography>
        <Typography component='li'>
          Сделать постраничный вывод картинок.
        </Typography>
        <Typography component='li'>
          Сделать кнопку удаления картинки.
        </Typography>
        <Typography component='li'>
          При нажатии выводить модалку с увеличенной картинкой (для списка -
          thumbnailUrl, для модалки - url).
        </Typography>
        <Typography component='li'>
          Сделать возможность сортировки по айдишнику альбома (albumId), сделать
          может быть селектор или же просто вывести над списком все айдишники и
          при нажатии делать фильтрацию.
        </Typography>
      </Typography>
      <br />
      <Typography variant='h5' component='h2'>
        Комментарии по заданию
      </Typography>
      <br />
      <Typography component='ol'>
        <Typography component='li'>
          API запросы и получение данных с сервера в стор реализованы с помощью
          RTK Query. Выбрал актуальный инструмент, позволяющий масштабировать
          приложение. Преимущества RTK Query: кэширование результатов запросов,
          отсутствие дублирующих запросов, возможность инициировать
          периодические запросы.
        </Typography>
        <Typography component='li'>
          API jsonplaceholder поддерживает пагинацию, поэтому я использовал эту
          возможность, чтобы не получать сразу все данные на фронт и не нарезать
          их на страницы, что уменьшает траффик, повышает скорость ответа
          сервера и отрисовки.
        </Typography>
        <Typography component='li'>
          API jsonplaceholder поддерживает получение запроса на удаление DELETE,
          но реального удаления данных на сервере не происходит.
          <pre>
            <code>
              {"fetch('https://jsonplaceholder.typicode.com/photo/1', {"}
              <br />
              {"  method: 'DELETE',"}
              <br />
              {'})'}
            </code>
          </pre>
          Тем не менее я реализовал отправку DELETE и GET при нажатии на кнопку
          удаления фото, как это было бы при нормально работающем API. При этом
          на фронте сохраняются результаты действий обновления/сортировки,
          поэтому данные отрисовываются так, как будто с API пришли обновления.
        </Typography>
      </Typography>
    </Box>
  )
}
