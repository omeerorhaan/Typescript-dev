type User = { id: number; name: string; email: string };
const users: User[] = [
  { id: 1, name: "Ali", email: "ali@mail.com" },
  { id: 2, name: "Ayşe", email: "ayse@mail.com" },
];

function search(id: number): User | undefined;
function search(name: string): User[];

function search(param: number | string): User | User[] | undefined {
  if (typeof param === 'number') {
    return users.find(user => user.id === param);
  }
  
  if (typeof param === 'string') {
    return users.filter(user => user.name === param);
  }
  return undefined; 
}

console.log(search(1));
console.log(search("Ayşe"));
