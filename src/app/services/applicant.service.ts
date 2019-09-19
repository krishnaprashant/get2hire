import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApplicantService {
  addEducation_url = "http://api.get2hire.com/api/add-education-details";
  addExperience_url = "http://api.get2hire.com/api/add-experience";
  addSkill_url = "http://api.get2hire.com/api/add-skills";

  getEducationDetailsUrl = "http://api.get2hire.com/api/get-education-details";
  getExperienceDetailsUrl =
    "http://api.get2hire.com/api/get-experience-details";
  getSkillsUrl = "http://api.get2hire.com/api/get-skills";
  getPersonalDetailsUrl = "http://api.get2hire.com/api/applicant";
  AddProjectDetailsUrl = "http://api.get2hire.com/api/add-project-details";
  getProjectDetailsUrl = "http://api.get2hire.com/api/get-project-details";

  deleteSkillUrl = "http://api.get2hire.com/api/delete-skill";
  deleteEducationDetailsUrl =
    "http://api.get2hire.com/api/delete-educational-details";
  deleteProjectDetailsUrl = "http://api.get2hire.com/api/delete-project";
  deleteExperienceUrl = "http://api.get2hire.com/api/delete-experience";

  constructor(private httpClient: HttpClient) {}

  getPersonalDetails(data) {
    return this.httpClient.post<any>(this.getPersonalDetailsUrl, data).pipe(
      map(data => {
        return data;
      })
    );
  }

  addDetails(data: any) {
    return this.httpClient.post<any>(this.addEducation_url, data).pipe(
      map(data => {
        return data;
      })
    );
  }

  addProjectDetails(data: any) {
    return this.httpClient.post<any>(this.AddProjectDetailsUrl, data).pipe(
      map(data => {
        return data;
      })
    );
  }
  addExperience(data: any) {
    return this.httpClient.post<any>(this.addExperience_url, data).pipe(
      map(data => {
        return data;
      })
    );
  }
  addSkill(data: any) {
    return this.httpClient.post<any>(this.addSkill_url, data).pipe(
      map(data => {
        return data;
      })
    );
  }

  GetEducationalDetails(data: any) {
    return this.httpClient.post<any>(this.getEducationDetailsUrl, data).pipe(
      map(data => {
        return data;
      })
    );
  }
  GetExperienceDetails(data: any) {
    return this.httpClient.post<any>(this.getExperienceDetailsUrl, data).pipe(
      map(data => {
        return data;
      })
    );
  }
  GetSkills(data: any) {
    return this.httpClient.post<any>(this.getSkillsUrl, data).pipe(
      map(data => {
        return data;
      })
    );
  }
  getProjectDetails(data: any) {
    return this.httpClient.post<any>(this.getProjectDetailsUrl, data).pipe(
      map(data => {
        return data;
      })
    );
  }

  deleteSkill(data: any) {
    return this.httpClient.post<any>(this.deleteSkillUrl, data).pipe(
      map(data => {
        return data;
      })
    );
  }

  deleteEducationDetails(data: any) {
    return this.httpClient.post<any>(this.deleteEducationDetailsUrl, data).pipe(
      map(data => {
        return data;
      })
    );
  }
  deleteExperienceDetails(data: any) {
    return this.httpClient.post<any>(this.deleteExperienceUrl, data).pipe(
      map(data => {
        return data;
      })
    );
  }
  deleteProjectDetails(data: any) {
    return this.httpClient.post<any>(this.deleteProjectDetailsUrl, data).pipe(
      map(data => {
        return data;
      })
    );
  }
}
