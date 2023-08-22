
import Todo from './models/Todos.js'

const resolvers = {
    Query: {
      welcome: () => {'Hello, world!'},



      getTodos: async()=>{
        const todos = await Todo.find({})
        return todos
       },

       getTodo: async(root, args)=>{
        const todo = await Todo.findById(args.id)
        return todo
       }

       

       

    },



    Mutation:{
      addTodo:async(root,args)=>{
        const newTodo = new Todo ({title:args.title})

        await newTodo.save()

        return newTodo

      },


      deleteTodo : async(root, args)=>{
        await Todo.findByIdAndDelete(args.id)
        return "todo deleted"
       }


    }



  };

  
  export default resolvers;