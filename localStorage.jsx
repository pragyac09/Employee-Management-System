

const employee = [
  {
    id: 1,
    firstName: "Rahul",
    email: "rahul@example.com",
    password: "123",
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Submit project report",
        description: "Submit Q2 report by EOD",
        date: "2025-06-28",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Team meeting",
        description: "Monthly sync-up with team",
        date: "2025-06-30",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Bug fixing",
        description: "Fix issues reported by QA",
        date: "2025-06-25",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "priya@example.com",
    password: "123",
    taskSummary: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Client presentation",
        description: "Prepare slides for client call",
        date: "2025-06-29",
        category: "Presentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update documentation",
        description: "Revise user manual for v2.1",
        date: "2025-06-26",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Team building activity",
        description: "Plan Q3 virtual team event",
        date: "2025-07-01",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Design review",
        description: "Review UI mockups for new feature",
        date: "2025-06-24",
        category: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstName: "Aman",
    email: "aman@example.com",
    password: "123",
    taskSummary: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Implement login flow",
        description: "Develop login page with validation",
        date: "2025-06-27",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Database migration",
        description: "Migrate data to new schema",
        date: "2025-06-28",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write unit tests",
        description: "Add tests for new modules",
        date: "2025-06-26",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "sneha@example.com",
    password: "123",
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Create dashboard layout",
        description: "Design dashboard structure in Figma",
        date: "2025-06-30",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Organize files",
        description: "Clean up redundant design files",
        date: "2025-06-27",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update portfolio",
        description: "Add recent work to portfolio",
        date: "2025-06-29",
        category: "Personal",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    firstName: "Karthik",
    email: "karthik@example.com",
    password: "123",
    taskSummary: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Draft newsletter",
        description: "Write July newsletter content",
        date: "2025-06-28",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Campaign analysis",
        description: "Analyze performance of ad campaigns",
        date: "2025-06-25",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Social media calendar",
        description: "Schedule July posts",
        date: "2025-06-30",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Design banner",
        description: "Create promo banner for new product",
        date: "2025-06-24",
        category: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];


const admin = [{
  id: 1,
  email: "admin@example.com",
  password: "123"
}];

export const setLocalStorage= () =>{
        localStorage.setItem('employees',JSON.stringify(employee))
        localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage= () =>{
       const employees= JSON.parse(localStorage.getItem('employees'))
       const admin= JSON.parse(localStorage.getItem('admin') )

       return {employees,admin}
}