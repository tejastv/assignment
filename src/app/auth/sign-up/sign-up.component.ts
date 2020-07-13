import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/services/user-service.service';
import { AuthService } from 'src/app/services/auth-service.service';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { ImageTransform, ImageCroppedEvent, base64ToFile, Dimensions } from 'ngx-image-cropper';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  maxDate: Date;
  modalRef: BsModalRef;
  fileName = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthService,
    private userService: UserService,
    private modalService: BsModalService
    // private alertService: AlertService
  ) {
    // redirect to home if already logged in
    this.maxDate = new Date();
  }

  // @ViewChild('template') template: ElementRef;
  @ViewChild('template') public template: ModalDirective;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.maxLength(30)]],
      surname: ['', [Validators.required, Validators.maxLength(30)]],
      mobilenum: ['', [Validators.required, Validators.maxLength(10)]],
      emailid: ['', [Validators.required, Validators.email]],
      propic: ['', Validators.required],
      address: ['', Validators.required],
      dob: ['', Validators.required],
    });
  }

  imageChangedEvent: any = '';
  croppedImage: any = '';
  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  showCropper = false;
  containWithinAspectRatio = false;
  transform: ImageTransform = {};

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.template.show();
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  imageLoaded() {
    this.showCropper = true;
  }

  cropperReady(sourceImageDimensions: Dimensions) {
  }

  loadImageFailed() {
  }

  closeMd() {
    if (this.croppedImage == '') {
      this.croppedImage = '';
      this.imageChangedEvent = '';
      this.registerForm.controls['propic'].reset()
      this.template.hide();
    }
  }

  saveChange() {
    this.imageChangedEvent = '';
    this.template.hide();
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.registerForm.value['propic'] = this.croppedImage;
    localStorage.setItem("userData", JSON.stringify(this.registerForm.value));
    alert("User is registred successfully!");
    this.router.navigate(['/auth/signin']);
  }

}
