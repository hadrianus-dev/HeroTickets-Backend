class EmailValueObject {
    private email: string;
  
    constructor(email: string) {
      this.validate(email);
      this.email = email;
    }
  
    private validate(email: string) {
      if (!this.isValidEmail(email)) {
        throw new Error('Invalid email');
      }
    }
  
 //...

    private isValidEmail(email: string): boolean {

        if(!email) {
        return false;
        }
    
        const emailParts = email.split('@');
    
        if(emailParts.length !== 2) {
        return false;
        }
    
        const [local, domain] = emailParts;
    
        if(!local.length) {
        return false; 
        }
    
        if(!domain.length) {
        return false;
        }
    
        if(domain.indexOf('.') === -1) {
        return false;
        }
    
        return true;
    
    }
  
  //...
  
    getValue(): string {
      return this.email;
    }
  }

export { EmailValueObject }