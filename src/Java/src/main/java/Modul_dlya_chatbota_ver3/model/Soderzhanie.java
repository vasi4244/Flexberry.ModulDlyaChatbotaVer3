package Modul_dlya_chatbota_ver3.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Modul_dlya_chatbota_ver3.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Содержание
 */
@Entity(name = "IISModul_dlya_chatbota_ver3Содержание")
@Table(schema = "public", name = "Содержание")
public class Soderzhanie {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Вопрос")
    private String вопрос;

    @Column(name = "Вариант_1")
    private String вариант_1;

    @Column(name = "Вариант_2")
    private String вариант_2;

    @Column(name = "Вариант_3")
    private String вариант_3;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "NastrojkiOpr")
    @Convert("NastrojkiOpr")
    @Column(name = "НастройкиОпр", length = 16, unique = true, nullable = false)
    private UUID _nastrojkioprid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "NastrojkiOpr", insertable = false, updatable = false)
    private NastrojkiOpr nastrojkiopr;


    public Soderzhanie() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getВопрос() {
      return вопрос;
    }

    public void setВопрос(String вопрос) {
      this.вопрос = вопрос;
    }

    public String getВариант_1() {
      return вариант_1;
    }

    public void setВариант_1(String вариант_1) {
      this.вариант_1 = вариант_1;
    }

    public String getВариант_2() {
      return вариант_2;
    }

    public void setВариант_2(String вариант_2) {
      this.вариант_2 = вариант_2;
    }

    public String getВариант_3() {
      return вариант_3;
    }

    public void setВариант_3(String вариант_3) {
      this.вариант_3 = вариант_3;
    }


}