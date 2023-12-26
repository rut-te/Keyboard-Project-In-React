//שמירת נתוני פעולה שנכנסת למחסנית
export default class action{
    constructor(type, before){
        this.type=type;//איזה סוג שיוני נעשה
        this.before=before;//מה היה לפני
    }
}