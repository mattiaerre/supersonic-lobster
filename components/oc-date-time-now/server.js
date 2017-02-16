/* eslint-disable import/prefer-default-export */
export const data = (context, callback) => {
  const model = {
    staticPath: context.staticPath,
    dateTimeNow: Date.now()
  };
  return callback(null, model);
};
