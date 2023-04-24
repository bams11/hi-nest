import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('/:id')
  getId(@Param('id') movieID: string): Movie {
    return this.moviesService.getOne(movieID);
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieID: string) {
    return this.moviesService.deleteOne(movieID);
  }

  @Put('/:id')
  update(@Param('id') movieID: string, @Body() updateData) {
    return this.moviesService.update(movieID, updateData);
  }

  @Patch('/:id')
  patch(@Param('id') movieID: string, @Body() updateData) {
    return {
      updateMovie: movieID,
      ...updateData,
    };
  }
}
