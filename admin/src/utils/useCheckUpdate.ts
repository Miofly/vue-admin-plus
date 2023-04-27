export default function useCheckUpdate(delay = 30000) {
  const getETag = async() => {
    const url = `${window.location.protocol}//${window.location.host}`;
   
    const { response } = await request.head(url, {
      getResponse: true,
      cache: 'no-cache'
    });
    return response.headers.get('etag') || response.headers.get('last-modified');
  };
}
