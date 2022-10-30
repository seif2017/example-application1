export async function getAllParams() {
  const response = await fetch("/api/params");
  return await response.json();
}

export async function getParam() {

  const response = await fetch("/api/params/PARAM1");
  return await response.json();
}

export async function setParam() {

  const response = await fetch("/api/params/PARAM1/AAAAAA", { method: "PUT" });
  return await response.json();
}
