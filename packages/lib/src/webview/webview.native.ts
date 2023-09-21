export const openWebUrl = (url: string) => {
  /*
   * force open url ( even if in-service url)
   * navigation hook or function will be imported
   */
};

export const useWebSdk = () => {
  /*
 * module or web fetch
 * inject web code
 TODO : implement onDone, onCancel, onError 

*/
};

/* 
  or combine two functions 
  ex)

  useWebview ( ) {
    const openUrl
    const useWebSdk

    return {openUrl, useWebSdk}

  }

*/
