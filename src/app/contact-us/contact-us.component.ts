import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailFormatValidator } from '../shared/custom-email.validator';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, emailFormatValidator()]],
      phoneNumbers: this.formBuilder.array([this.createPhoneNumberField()]), // FormArray for phone numbers
      message: ['', Validators.required]
    });
  }

  createPhoneNumberField(): FormGroup {
    return this.formBuilder.group({
      phoneNumber: ['', Validators.required]
    });
  }

  get phoneNumbers(): FormArray {
    return this.contactForm.get('phoneNumbers') as FormArray;
  }

  addPhoneNumberField(): void {
    this.phoneNumbers.push(this.createPhoneNumberField());
  }

  removePhoneNumberField(index: number): void {
    this.phoneNumbers.removeAt(index);
  }

  onSubmit(): void {
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }   

}
