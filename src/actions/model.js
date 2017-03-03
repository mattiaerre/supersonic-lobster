import Falcor from '@graphistry/falcor';
import FalcorDataSource from 'falcor-http-datasource';

const model = new Falcor.Model({ source: new FalcorDataSource('/api/v1/model.json') });

export default model;
