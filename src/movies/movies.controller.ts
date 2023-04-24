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

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after: ${searchingYear}`;
  }

  @Get('/:id')
  getId(@Param('id') movieID: string) {
    return `This will return 1 movie with the id: ${movieID}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete('/:id')
  remove(@Param('id') movieID: string) {
    return `This will delete a movie with the id: ${movieID}`;
  }

  @Put('/:id')
  update(@Param('id') movieID: string, @Body() updateData) {
    return {
      updateMovie: movieID,
      ...updateData,
    };
  }

  @Patch('/:id')
  patch(@Param('id') movieID: string, @Body() updateData) {
    return {
      updateMovie: movieID,
      ...updateData,
    };
  }
}
