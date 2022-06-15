// A mock function to mimic making an async request for data
export function login() {
  return new Promise((resolve) => setTimeout(() => resolve(true), 500));
}
