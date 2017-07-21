package Directory.Repository;

import Directory.Entity.Person;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
public class PersonRepositoryImpl implements PersonRepository{


    @PersistenceContext
    private EntityManager em;

    @Override
    public List<Person> findAll() {
        TypedQuery<Person> query = em.createNamedQuery("Person.findAll", Person.class);
        return query.getResultList();
    }

    @Override
    public Person findOne(String Id) {
        return em.find(Person.class,Id);

    }

    @Override
    public Person findByPhone(String phoneNumber) {
        TypedQuery<Person> query = em.createNamedQuery("Person.findByPhone",Person.class);
        query.setParameter("pPhone", phoneNumber);
        List<Person> resultList = query.getResultList();
        if(resultList != null && resultList.size() == 1){
            return resultList.get(0);
        }else {
            return null;
        }

    }

    @Override
    public Person create(Person person) {
        em.persist(person);
        return person;

    }

    @Override
    public Person update(Person person) {
        return em.merge(person);
    }

    @Override
    public void delete(Person person) {
        em.remove(person);
    }

}
