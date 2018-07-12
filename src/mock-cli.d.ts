declare module 'mock-cli' {
  function mockCli(argv: Array<string>, stdio: any, callback: any): void;
  export = mockCli;
}
