import { Hono } from 'hono'
import About from '../About'

const app = new Hono()

const View = () => {
  return (
    <html>
      <body>
        <h1>Hello!</h1>
      </body>
    </html>
  )
}

app.get('/', (c) => {
  return c.html(<View />)
})

app.get('/about', (c) => {
  return c.html(<About />)
})


export default app