import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()

export class DepartmentsService {
    constructor(private http: Http) {}

    getDepartmentsDetail() {
      return this.http.get('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments/');
    }

    removeDepartmentById(id: number){
      const headers = new Headers({ 'Content-Type': 'application/json' });
      const options = new RequestOptions({
        headers: headers,
      });
      const url = 'http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments/' + id;
      return this.http.delete(url, options)
        .catch(err =>  {
           console.log('Something went wrong');
           return Observable.throw(err);
        });
    }

    addDepartment (body: Object) {
        const bodyString = JSON.stringify(body);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({
          headers: headers
        });
        const url = 'http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments/';
        return this.http.post(url, bodyString, options)
          .catch(err =>  {
             console.log('Something went wrong');
             return Observable.throw(err);
          });
    }

    getEmployees() {
      return this.http.get('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/employees')
        .catch(err =>  {
           console.log('Something went wrong');
           return Observable.throw(err);
        });
    }

    getDepartmentById(id){
      return this.http.get('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments/' + id)
        .catch(err =>  {
           console.log('Something went wrong');
           return Observable.throw(err);
        });
    }

}
