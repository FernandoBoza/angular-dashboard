export default class CONSTANTS {

   public static menu = [
      {
         label: "Home",
         icon: "fa-home-alt",
         notification: 0,
         url: ""
      },
      {
         label: "Projects",
         icon: "fa-chart-bar",
         notification: 0,
         url: "projects"
      },
      {
         label: "Department",
         icon: "fa-users",
         notification: 0,
         url: "departments"
      },
      {
         label: "Tasks",
         icon: "fa-tasks",
         notification: 0,
         url: "tasks"
      },
      {
         label: "Inbox",
         icon: "fa-inbox",
         notification: 1,
         url: "inbox"
      },
      {
         label: "Notifications",
         icon: "fa-bell",
         notification: 2,
         url: "notifications"
      },
      {
         label: "Calendar",
         icon: "fa-calendar",
         notification: 0,
         url: "calendar"
      },
      {
         label: "Settings",
         icon: "fa-cog",
         notification: 0,
         url: "settings"
      },
   ]

   public static notifications = [
      {
         message: "Jane Smith completed Call with AWS",
         status: "complete",
         timelog: "6 hours ago"
      },
      {
         message: "Maggie Lopez created task Transfer DB to Mongo",
         status: "pending",
         timelog: "8 hours ago"
      },
      {
         message: "Jean Parker added you to task Fix Calendar UI",
         status: "pending",
         timelog: "8 hours ago"
      },
      {
         message: "John Doe deleted task Migrate frontend to jQuery",
         status: "deleted",
         timelog: "2 days ago"
      },
      {
         message: "Jane Smith completed Call with AWS",
         status: "complete",
         timelog: "6 hours ago"
      },
      {
         message: "Maggie Lopez created task Transfer DB to Mongo",
         status: "pending",
         timelog: "8 hours ago"
      },
      {
         message: "Jean Parker added you to task Fix Calendar UI",
         status: "pending",
         timelog: "8 hours ago"
      },
      {
         message: "John Doe deleted task Migrate frontend to jQuery",
         status: "deleted",
         timelog: "2 days ago"
      }
   ]

   public static departments = [
      "Development",
      "Sales",
      "Marketing",
      "Engineering"
   ]

   public static tasks_completed = [
      {
         message: "Set up aws SE2 for client",
         author: "Jane Smith",
         department: "Development",
         timelog: "1 day ago"
      },
      {
         message: "Fix sales contract - EMEA",
         author: "Jane Smith",
         department: "Sales",
         timelog: "1 day ago"
      },
      {
         message: "Call with AWS",
         author: "Jane Smith",
         department: "Development",
         timelog: "6 hours ago"
      },
      {
         message: "Finsish IBC broshure",
         author: "Jane Smith",
         department: "Marketing",
         timelog: "1 day ago"
      },
      {
         message: "Set up license for FOX",
         author: "Jane Smith",
         department: "Engineering",
         timelog: "1 day ago"
      },
   ]

   public static tasks_pending = [
      {
         message: "Finish media brochure for Intel",
         author: "Jane Smith",
         department: "Marketing",
      },
      {
         message: "Working on upload panel",
         author: "John Doe",
         department: "Development",
      },
      {
         message: "Seek interface on panel",
         author: "Jean Parker",
         department: "Engineering",
      },
      {
         message: "Fix AI for translation",
         author: "Maggie Lopez",
         department: "Development",
      },
      {
         message: "Create project",
         author: "Jane Smith",
         department: "Development",
      },
   ]

   public static messages = [
      {
         name: "John Doe",
         img: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
         date: "Sept 01",
         unread: 2,
         thread: [
            {
               time: "10:05 AM",
               message: "did you see the packages I sent you ?",
               name: "John Doe",
               img: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
            },
            {
               time: "10:15 AM",
               message: "Yea! they're really cheaaap",
               name: "Jane Smith",
               img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
            },
            {
               time: "10:22 AM",
               message: "I knowwww",
               name: "John Doe",
               img: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
            }
         ]
      }
   ]
}