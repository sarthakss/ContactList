package Directory.Controller;


import Directory.Entity.Person;
import Directory.Service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)

@RequestMapping(value = "person")
public class PersonController {

    @Autowired
    private PersonService service;

    @RequestMapping(method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE )
    public List<Person> findAll(){
        return service.findAll();
    }

    @RequestMapping(method = RequestMethod.GET, value = "{Id}",
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Person findOne(@PathVariable("Id") String personId){

        return service.findOne(personId);
    }

    @RequestMapping(method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE,
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Person create(@RequestBody Person person){
        return service.create(person);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "{Id}",
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE,
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Person update(@PathVariable("Id") String personId, @RequestBody Person person){
        return service.update(personId, person);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "{Id}")
    public void delete(@PathVariable("Id") String personId){
        service.delete(personId);
    }

}
