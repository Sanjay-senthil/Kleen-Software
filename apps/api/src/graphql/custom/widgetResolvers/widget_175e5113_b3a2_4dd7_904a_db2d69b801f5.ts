import { GetWidgetDataResult, DataAggregationArgs, AuthContext } from '../../../types';

// Widget Summary
// Widget: Games List
// Value: games - Total Count
// Group by: pub - No Aggregation
export const widget_175e5113_b3a2_4dd7_904a_db2d69b801f5 = async (
  input: DataAggregationArgs,
  context: AuthContext,
): Promise<GetWidgetDataResult | 'not implemented'> => {
  // KAPI - Integration

  // In order for you to connect your backend, you can add in here your code
  // that fetch the corresponding API data.

  // You can access the token, data sources, and the current user through the 'context' param.

  // Please replace the default return statement ('not implemented') with the
  // required widget response, e.g.
  // const format = {
  //   xAxis: {
  //     type: 'datetime', // The type of the attribute, usually datetime for x axis.
  //     key: 'yourAttribute',
  //     isNumericType: true, // True or false depending on the type
  //   },
  //   yAxis: {
  //     type: 'string', // String or any other KAPI type, depending on your attribute
  //     key: 'yourAttribute',
  //     isNumericType: false, // True or false depending on the type
  //   },
  // };
  // return fetch('http://put.your.api.here/your-resource') // Fetch is available through npm package node-fetch
  //   .then((http_response) => http_response.json()) // Extracts the JSON body content from the http response.
  //   .then((res) => {
  //     return { format, res };
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     return 'not implemented';
  //   });

  return 'not implemented';
};
