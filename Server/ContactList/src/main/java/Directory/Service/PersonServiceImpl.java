package Directory.Service;

import Directory.Entity.Person;
import Directory.Exceptions.EntityNotFoundException;
import Directory.Repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class PersonServiceImpl implements PersonService{


    @Autowired
    private PersonRepository repository;

    @Override
    public List<Person> findAll() {
        return repository.findAll();
    }

    @Override
    public Person findOne(String Id) {
        Person person = repository.findOne(Id);
        if(person == null)
        {
            // throw exception
            throw new EntityNotFoundException("Person with Id" + Id + "not found");

        }
        return person;
    }

    @Override
    public Person create(Person person) {
        Person existing=repository.findByPhone(person.getPhoneNumber());
        if(existing != null){
            //throws exception
            throw new EntityNotFoundException("Person with Phone" + person.getPhoneNumber() +" not found");

        }
        return repository.create(person);

    }

    @Override
    public Person update(String Id, Person person) {
        Person existing = repository.findOne(Id);
        if(existing == null)
        {
            // throw exception
            throw new EntityNotFoundException("Person with Id" + Id + "not found");

        }
        return repository.update(person);
    }

    @Override
    public void delete(String Id) {

        Person person = repository.findOne(Id);
        if(person == null)
        {
            // throw exception
            throw new EntityNotFoundException("Person with Id" + Id + "not found");

        }
        repository.delete(person);
    }

}
