import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import {CreateProfile} from "./dto/create-profile.dto"
import {UpdateProfile} from "./dto/update-profile.dto"
import { title } from 'process';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {

    constructor(private profileService: ProfilesService){

    }

  @Get()
  findAll(@Query('link') link: string) {
    return this.profileService.findMany();
    }

    @Get(':id')
    findUnique(@Param('id') id: string){
        return this.profileService.findUnique(Number(id));
    }

    @Post()
    create(@Body() createProfile: CreateProfile) {

        console.log(createProfile);

        return [{
            title: createProfile.title,
            content: createProfile.content
        }]
    }

    @Put(':id')
    update(
        @Param('id') id: string, 
        @Body() updateProfile: UpdateProfile
    ) {
        return [{
            id: id,
            title: updateProfile.title,
            content: updateProfile.content,
        }]
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    remove(@Param('id') id: string){
    }
}