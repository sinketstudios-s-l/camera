import { Component, OnInit } from '@angular/core';
import { CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from '@ionic-native/camera-preview/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  picture: string

  cameraOpts: CameraPreviewOptions = {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight,
    toBack: true,
  }

  cameraPicOpts: CameraPreviewPictureOptions = {
    width: window.innerWidth,
    height: window.innerHeight,
    quality: 100
  }

  constructor(private cameraPreview: CameraPreview) { }


  ngOnInit(){
    this.startCamera()
  }


  async startCamera() {
    this.picture = null
    const result = await this.cameraPreview.startCamera(this.cameraOpts)

    console.log(result)
  }

  switchCamera(){
    this.cameraPreview.switchCamera()
  }

  async takePicture(){
    const result = this.cameraPreview.takePicture(this.cameraPicOpts)
    await this.cameraPreview.stopCamera();
    this.picture = `data:image/jpeg;base64,${result}`;
  }




}
