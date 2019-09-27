export default class Utils {
   public static getStatus(status: string) {
      let x: string;
      switch (status) {
         case "in_progress":
            x = "In Progress"
            break;
         case "complete":
            x = "Complete"
            break;
         default:
            break;
      }
      return x
   }
}
