export function xhr(params: any) {
  return new Promise((resolve, reject) => {
    if (params?.method === "GET" && params.param) {
      const paramsArray: any = [];
      Object.keys(params.param).forEach((key) =>
        paramsArray.push(`${key}=${encodeURIComponent(params.param[key])}`)
      );
      if (params.url.search(/\?/) === -1) {
        // eslint-disable-next-line no-param-reassign
        params.url += `?${paramsArray.join("&")}`;
      } else {
        // eslint-disable-next-line no-param-reassign
        params.url += `&${paramsArray.join("&")}`;
      }
    }
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "",
    };
    if (params?.param?.Authorization) {
      headers.Authorization = `Bearer ${params.param.Authorization}`;
      // eslint-disable-next-line no-param-reassign
      delete params.param.Authorization;
    }
    const config: any = {
      headers,
      method: params.method || "POST",
      mode: "cors",
      keepalive: params.keepalive,
    };
    if (params.headers) {
      config.headers = params.headers;
    }
    if (!params.method || params.method === "POST" || params.method === "PUT") {
      config.body = JSON.stringify(params.param);
    }
    if (params.method === "PUT") {
      config.body = params.param;
    }

    fetch(params.url, config)
      .then((response: any) => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        }
        // globalStore.showNotice({
        //     type: 'rtmClient',
        //     message: 'サーバーエラーが発生しました。'
        //   });
        return reject();
      })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
