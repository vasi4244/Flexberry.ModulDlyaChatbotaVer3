﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Modul_dlya_chatbota_ver3
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Отделы.
    /// </summary>
    // *** Start programmer edit section *** (Отделы CustomAttributes)

    // *** End programmer edit section *** (Отделы CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОтделыE", new string[] {
            "КодОтдела as \'Код отдела\'",
            "Наименование as \'Наименование\'"})]
    [View("ОтделыL", new string[] {
            "КодОтдела as \'Код отдела\'",
            "Наименование as \'Наименование\'"})]
    public class Отделы : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодОтдела;
        
        private string fНаименование;
        
        // *** Start programmer edit section *** (Отделы CustomMembers)

        // *** End programmer edit section *** (Отделы CustomMembers)

        
        /// <summary>
        /// КодОтдела.
        /// </summary>
        // *** Start programmer edit section *** (Отделы.КодОтдела CustomAttributes)

        // *** End programmer edit section *** (Отделы.КодОтдела CustomAttributes)
        public virtual int КодОтдела
        {
            get
            {
                // *** Start programmer edit section *** (Отделы.КодОтдела Get start)

                // *** End programmer edit section *** (Отделы.КодОтдела Get start)
                int result = this.fКодОтдела;
                // *** Start programmer edit section *** (Отделы.КодОтдела Get end)

                // *** End programmer edit section *** (Отделы.КодОтдела Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Отделы.КодОтдела Set start)

                // *** End programmer edit section *** (Отделы.КодОтдела Set start)
                this.fКодОтдела = value;
                // *** Start programmer edit section *** (Отделы.КодОтдела Set end)

                // *** End programmer edit section *** (Отделы.КодОтдела Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Отделы.Наименование CustomAttributes)

        // *** End programmer edit section *** (Отделы.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Отделы.Наименование Get start)

                // *** End programmer edit section *** (Отделы.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Отделы.Наименование Get end)

                // *** End programmer edit section *** (Отделы.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Отделы.Наименование Set start)

                // *** End programmer edit section *** (Отделы.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Отделы.Наименование Set end)

                // *** End programmer edit section *** (Отделы.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОтделыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОтделыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОтделыE", typeof(IIS.Modul_dlya_chatbota_ver3.Отделы));
                }
            }
            
            /// <summary>
            /// "ОтделыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОтделыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОтделыL", typeof(IIS.Modul_dlya_chatbota_ver3.Отделы));
                }
            }
        }
    }
}
