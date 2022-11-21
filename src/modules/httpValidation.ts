export function isSuccess(response) {
  return response.status === 200 || response.status === 201;
}
