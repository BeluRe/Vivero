package com.vivero.demo.contoller;

import com.vivero.demo.dto.Mensaje;
import com.vivero.demo.dto.ProductoDto;
import com.vivero.demo.entity.Producto;
import com.vivero.demo.service.ProductoService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.yaml.snakeyaml.events.Event;

import java.util.List;

@RestController
@RequestMapping("api/producto/")
@CrossOrigin (origins = "http://localhost:4200/") //intercambio de datos entre front y back

public class ProductoController {
    @Autowired
    ProductoService productoService;

    @GetMapping("/list")

    public ResponseEntity<List<Producto>> list (){
        List<Producto> list = productoService.list();
        return new ResponseEntity<List<Producto>>(list, HttpStatus.OK);
    }
    @GetMapping("/detail/{id}")
    public ResponseEntity<Producto> getById (@PathVariable("id")int id){
        if (!productoService.existsById(id))
            return new ResponseEntity(new Mensaje("Producto inexistente"), HttpStatus.NOT_FOUND);
        Producto producto = productoService.getOne(id).get();
        return new ResponseEntity(producto, HttpStatus.OK);
    }
    @GetMapping("/detailname/{nombre}")
    public ResponseEntity<Producto> getByNombre (@PathVariable("nombre")String nombre){
        if (!productoService.existByNombre(nombre))
            return new ResponseEntity(new Mensaje("Producto inexistente"), HttpStatus.NOT_FOUND);//cod 404
        Producto producto = productoService.getByNombre(nombre).get();
        return new ResponseEntity(producto, HttpStatus.OK);
    }


    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody ProductoDto productoDto){
        if(StringUtils.isBlank(productoDto.getNombre()))
            return new ResponseEntity(new Mensaje("el nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        if(productoDto.getPrecio()==0.0|| productoDto.getPrecio()<0 )
            return new ResponseEntity(new Mensaje("el precio debe ser mayor que 0"), HttpStatus.BAD_REQUEST);
        if(productoService.existByNombre(productoDto.getNombre()))
            return new ResponseEntity(new Mensaje("ese nombre ya existe"), HttpStatus.BAD_REQUEST);
//cargaba productos con id, pero con datos null, el error: desde el entity se pasaban tres params y en el controller dos.Solución: agregando el param id al constructor(manual) y se le asignó una variable (lo hizo el programa)
      Long id;
      Producto producto = new Producto(id= null, productoDto.getNombre(), productoDto.getPrecio());
        productoService.save(producto);
        return new ResponseEntity(new Mensaje("producto creado"), HttpStatus.OK);
    }




    @PutMapping("/update/{id}")
    public  ResponseEntity<?> update(@PathVariable("id") long id,@RequestBody ProductoDto productoDto){
        if (!productoService.existsById(id))
            return new ResponseEntity(new Mensaje("Producto inexistente"), HttpStatus.NOT_FOUND);
//aca comprobamos si el producto que queremos cambiar existe con el mismo nombre que queremos poner como nuevo
        if(productoService.existByNombre(productoDto.getNombre()) && productoService.getByNombre(productoDto.getNombre()).get().getId() != id)
            return new ResponseEntity(new Mensaje("Ese nombre ya existe"),HttpStatus.BAD_REQUEST);


        if (StringUtils.isBlank(productoDto.getNombre()))
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"),HttpStatus.BAD_REQUEST);

        if (productoDto.getPrecio()<0)
            return new ResponseEntity(new Mensaje("El precio debe ser mayor a 0"),HttpStatus.BAD_REQUEST);

        Producto producto = productoService.getOne(id).get();
        producto.setNombre(productoDto.getNombre());
        producto.setPrecio(productoDto.getPrecio());
        productoService.save(producto);
        return  new ResponseEntity(new Mensaje("Producto actualizado"),HttpStatus.OK); //cod 200
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") long id){
        if (!productoService.existsById(id))
            return new ResponseEntity(new Mensaje("Producto inexistente"), HttpStatus.NOT_FOUND);

        productoService.delete(id);
        return  new ResponseEntity(new Mensaje("Producto eliminado"),HttpStatus.OK); //cod 200

    }

}




