// challenge.ts
const prettyPrintWilder = (users : User[]) => {
    users.map((user) => {
      console.log(`${user.name} is ${user.age} years old`);
    });
  };
  
  const wilders : User[] = [];
  interface User {
      name: string;
      age?: number;
      birthday? : string;
    }
  let user1 : User  = { name: "Pierre", age: 23 };
  const user2 : User  = { name: "Paul", age : 32 };
  const user3 : User  = { name: "Jacques", age: 25 };
  wilders.push(user1);
  wilders.push(user2);
  wilders.push(user3);
  prettyPrintWilder(wilders);
