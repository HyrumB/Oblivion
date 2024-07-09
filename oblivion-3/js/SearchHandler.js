export function createNASALibraryQuery() {
  
  const query = document.querySelector("#q");
  const media_type = document.querySelector("#media-type");

  const params = {
    q: query.value,
    media_type: media_type.value,
  };

  console.log(params);
  return params;
}
