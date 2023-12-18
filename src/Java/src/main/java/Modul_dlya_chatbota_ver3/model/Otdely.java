package Modul_dlya_chatbota_ver3.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Modul_dlya_chatbota_ver3.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Отделы
 */
@Entity(name = "IISModul_dlya_chatbota_ver3Отделы")
@Table(schema = "public", name = "Отделы")
public class Otdely {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодОтдела")
    private Integer кодотдела;

    @Column(name = "Наименование")
    private String наименование;


    public Otdely() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодОтдела() {
      return кодотдела;
    }

    public void setКодОтдела(Integer кодотдела) {
      this.кодотдела = кодотдела;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }


}