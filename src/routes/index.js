import userRoutes from './auth';

const routes = [{ ...userRoutes }];

const routeConfig = (app) => {
   return routes.forEach((item) =>
      item.routes.forEach((route) => app.use('/api' + item.prefix + route.path, route.route)),
   );
};

export default routeConfig;
