export type User = {
  id: number;
  first_name: string;
  last_name: string;
};

declare global {
  interface Window {
    __INITIAL_DATA__: {
      users: User[];
    };
  }
}

export {};
