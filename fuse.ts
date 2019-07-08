// tslint:disable-next-line: no-implicit-dependencies
import { fusebox, sparky } from 'fuse-box'

class Context {
  public isProduction = false
  public runServer = false

  public getConfig() {
    return fusebox({
      entry: 'src/index.ts',
      target: 'browser',
      webIndex: {
        template: 'src/index.html',
      },

      devServer: this.runServer,
      hmr: true,
      watch: true,

      cache: { enabled: true, root: '.cache' },
      env: { NODE_ENV: this.isProduction ? 'production' : 'development' },
      logging: { level: 'succinct' },
    })
  }
}

const { task } = sparky<Context>(Context)

task('default', async (context: Context) => {
  context.runServer = true

  const fuse = context.getConfig()
  await fuse.runDev()
})

task('preview', async (context: Context) => {
  context.runServer = true
  context.isProduction = true

  const fuse = context.getConfig()
  await fuse.runProd({ uglify: false })
})

task('dist', async (context: Context) => {
  context.runServer = false
  context.isProduction = true

  const fuse = context.getConfig()
  await fuse.runProd({ uglify: false })
})
