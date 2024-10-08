PGDMP  "                	    |            ProyectoServidor    16.3    16.3 >    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    32903    ProyectoServidor    DATABASE     �   CREATE DATABASE "ProyectoServidor" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
 "   DROP DATABASE "ProyectoServidor";
                postgres    false            �            1259    32926    boletos    TABLE     z   CREATE TABLE public.boletos (
    boleto_id integer NOT NULL,
    cliente character varying(100),
    vuelo_id integer
);
    DROP TABLE public.boletos;
       public         heap    postgres    false            �            1259    32925    boletos_boleto_id_seq    SEQUENCE     �   CREATE SEQUENCE public.boletos_boleto_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.boletos_boleto_id_seq;
       public          postgres    false    220                        0    0    boletos_boleto_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.boletos_boleto_id_seq OWNED BY public.boletos.boleto_id;
          public          postgres    false    219            �            1259    32977    consultas_soporte    TABLE     �   CREATE TABLE public.consultas_soporte (
    consulta_id integer NOT NULL,
    cliente character varying(255) NOT NULL,
    consulta text NOT NULL
);
 %   DROP TABLE public.consultas_soporte;
       public         heap    postgres    false            �            1259    32976 !   consultas_soporte_consulta_id_seq    SEQUENCE     �   CREATE SEQUENCE public.consultas_soporte_consulta_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public.consultas_soporte_consulta_id_seq;
       public          postgres    false    230                       0    0 !   consultas_soporte_consulta_id_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public.consultas_soporte_consulta_id_seq OWNED BY public.consultas_soporte.consulta_id;
          public          postgres    false    229            �            1259    32955    itinerarios    TABLE     �   CREATE TABLE public.itinerarios (
    itinerario_id integer NOT NULL,
    cliente character varying(100) NOT NULL,
    vuelos text,
    actividades text,
    fecha_creacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.itinerarios;
       public         heap    postgres    false            �            1259    32954    itinerarios_itinerario_id_seq    SEQUENCE     �   CREATE SEQUENCE public.itinerarios_itinerario_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.itinerarios_itinerario_id_seq;
       public          postgres    false    226                       0    0    itinerarios_itinerario_id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.itinerarios_itinerario_id_seq OWNED BY public.itinerarios.itinerario_id;
          public          postgres    false    225            �            1259    32939    pagos    TABLE       CREATE TABLE public.pagos (
    pago_id integer NOT NULL,
    cliente character varying(100) NOT NULL,
    monto numeric(10,2) NOT NULL,
    metodo_pago character varying(50) NOT NULL,
    fecha_pago timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.pagos;
       public         heap    postgres    false            �            1259    32938    pagos_pago_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pagos_pago_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.pagos_pago_id_seq;
       public          postgres    false    222                       0    0    pagos_pago_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.pagos_pago_id_seq OWNED BY public.pagos.pago_id;
          public          postgres    false    221            �            1259    32947 
   reembolsos    TABLE     �   CREATE TABLE public.reembolsos (
    reembolso_id integer NOT NULL,
    cliente character varying(100) NOT NULL,
    monto numeric(10,2) NOT NULL,
    fecha_reembolso timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    motivo text
);
    DROP TABLE public.reembolsos;
       public         heap    postgres    false            �            1259    32946    reembolsos_reembolso_id_seq    SEQUENCE     �   CREATE SEQUENCE public.reembolsos_reembolso_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.reembolsos_reembolso_id_seq;
       public          postgres    false    224                       0    0    reembolsos_reembolso_id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.reembolsos_reembolso_id_seq OWNED BY public.reembolsos.reembolso_id;
          public          postgres    false    223            �            1259    32914    reservas    TABLE     t   CREATE TABLE public.reservas (
    id integer NOT NULL,
    vuelo_id integer,
    cliente character varying(100)
);
    DROP TABLE public.reservas;
       public         heap    postgres    false            �            1259    32913    reservas_id_seq    SEQUENCE     �   CREATE SEQUENCE public.reservas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.reservas_id_seq;
       public          postgres    false    218                       0    0    reservas_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.reservas_id_seq OWNED BY public.reservas.id;
          public          postgres    false    217            �            1259    32965    soporte    TABLE     �   CREATE TABLE public.soporte (
    consulta_id integer NOT NULL,
    cliente character varying(100) NOT NULL,
    mensaje text NOT NULL,
    fecha_consulta timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.soporte;
       public         heap    postgres    false            �            1259    32964    soporte_consulta_id_seq    SEQUENCE     �   CREATE SEQUENCE public.soporte_consulta_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.soporte_consulta_id_seq;
       public          postgres    false    228                       0    0    soporte_consulta_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.soporte_consulta_id_seq OWNED BY public.soporte.consulta_id;
          public          postgres    false    227            �            1259    32905    vuelos    TABLE     �   CREATE TABLE public.vuelos (
    vuelo_id integer NOT NULL,
    origen character varying(100),
    destino character varying(100),
    fecha date,
    precio numeric
);
    DROP TABLE public.vuelos;
       public         heap    postgres    false            �            1259    32904    vuelos_vuelo_id_seq    SEQUENCE     �   CREATE SEQUENCE public.vuelos_vuelo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.vuelos_vuelo_id_seq;
       public          postgres    false    216                       0    0    vuelos_vuelo_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.vuelos_vuelo_id_seq OWNED BY public.vuelos.vuelo_id;
          public          postgres    false    215            ?           2604    32929    boletos boleto_id    DEFAULT     v   ALTER TABLE ONLY public.boletos ALTER COLUMN boleto_id SET DEFAULT nextval('public.boletos_boleto_id_seq'::regclass);
 @   ALTER TABLE public.boletos ALTER COLUMN boleto_id DROP DEFAULT;
       public          postgres    false    219    220    220            H           2604    32980    consultas_soporte consulta_id    DEFAULT     �   ALTER TABLE ONLY public.consultas_soporte ALTER COLUMN consulta_id SET DEFAULT nextval('public.consultas_soporte_consulta_id_seq'::regclass);
 L   ALTER TABLE public.consultas_soporte ALTER COLUMN consulta_id DROP DEFAULT;
       public          postgres    false    229    230    230            D           2604    32958    itinerarios itinerario_id    DEFAULT     �   ALTER TABLE ONLY public.itinerarios ALTER COLUMN itinerario_id SET DEFAULT nextval('public.itinerarios_itinerario_id_seq'::regclass);
 H   ALTER TABLE public.itinerarios ALTER COLUMN itinerario_id DROP DEFAULT;
       public          postgres    false    225    226    226            @           2604    32942    pagos pago_id    DEFAULT     n   ALTER TABLE ONLY public.pagos ALTER COLUMN pago_id SET DEFAULT nextval('public.pagos_pago_id_seq'::regclass);
 <   ALTER TABLE public.pagos ALTER COLUMN pago_id DROP DEFAULT;
       public          postgres    false    222    221    222            B           2604    32950    reembolsos reembolso_id    DEFAULT     �   ALTER TABLE ONLY public.reembolsos ALTER COLUMN reembolso_id SET DEFAULT nextval('public.reembolsos_reembolso_id_seq'::regclass);
 F   ALTER TABLE public.reembolsos ALTER COLUMN reembolso_id DROP DEFAULT;
       public          postgres    false    223    224    224            >           2604    32917    reservas id    DEFAULT     j   ALTER TABLE ONLY public.reservas ALTER COLUMN id SET DEFAULT nextval('public.reservas_id_seq'::regclass);
 :   ALTER TABLE public.reservas ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            F           2604    32968    soporte consulta_id    DEFAULT     z   ALTER TABLE ONLY public.soporte ALTER COLUMN consulta_id SET DEFAULT nextval('public.soporte_consulta_id_seq'::regclass);
 B   ALTER TABLE public.soporte ALTER COLUMN consulta_id DROP DEFAULT;
       public          postgres    false    227    228    228            =           2604    32908    vuelos vuelo_id    DEFAULT     r   ALTER TABLE ONLY public.vuelos ALTER COLUMN vuelo_id SET DEFAULT nextval('public.vuelos_vuelo_id_seq'::regclass);
 >   ALTER TABLE public.vuelos ALTER COLUMN vuelo_id DROP DEFAULT;
       public          postgres    false    215    216    216            �          0    32926    boletos 
   TABLE DATA           ?   COPY public.boletos (boleto_id, cliente, vuelo_id) FROM stdin;
    public          postgres    false    220   wF       �          0    32977    consultas_soporte 
   TABLE DATA           K   COPY public.consultas_soporte (consulta_id, cliente, consulta) FROM stdin;
    public          postgres    false    230   �F       �          0    32955    itinerarios 
   TABLE DATA           b   COPY public.itinerarios (itinerario_id, cliente, vuelos, actividades, fecha_creacion) FROM stdin;
    public          postgres    false    226   �F       �          0    32939    pagos 
   TABLE DATA           Q   COPY public.pagos (pago_id, cliente, monto, metodo_pago, fecha_pago) FROM stdin;
    public          postgres    false    222   �G       �          0    32947 
   reembolsos 
   TABLE DATA           [   COPY public.reembolsos (reembolso_id, cliente, monto, fecha_reembolso, motivo) FROM stdin;
    public          postgres    false    224   4H       �          0    32914    reservas 
   TABLE DATA           9   COPY public.reservas (id, vuelo_id, cliente) FROM stdin;
    public          postgres    false    218   .I       �          0    32965    soporte 
   TABLE DATA           P   COPY public.soporte (consulta_id, cliente, mensaje, fecha_consulta) FROM stdin;
    public          postgres    false    228   WI       �          0    32905    vuelos 
   TABLE DATA           J   COPY public.vuelos (vuelo_id, origen, destino, fecha, precio) FROM stdin;
    public          postgres    false    216   �I                  0    0    boletos_boleto_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.boletos_boleto_id_seq', 1, false);
          public          postgres    false    219            	           0    0 !   consultas_soporte_consulta_id_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public.consultas_soporte_consulta_id_seq', 2, true);
          public          postgres    false    229            
           0    0    itinerarios_itinerario_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.itinerarios_itinerario_id_seq', 2, true);
          public          postgres    false    225                       0    0    pagos_pago_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.pagos_pago_id_seq', 3, true);
          public          postgres    false    221                       0    0    reembolsos_reembolso_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.reembolsos_reembolso_id_seq', 8, true);
          public          postgres    false    223                       0    0    reservas_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.reservas_id_seq', 5, true);
          public          postgres    false    217                       0    0    soporte_consulta_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.soporte_consulta_id_seq', 1, true);
          public          postgres    false    227                       0    0    vuelos_vuelo_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.vuelos_vuelo_id_seq', 6, true);
          public          postgres    false    215            N           2606    32931    boletos boletos_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.boletos
    ADD CONSTRAINT boletos_pkey PRIMARY KEY (boleto_id);
 >   ALTER TABLE ONLY public.boletos DROP CONSTRAINT boletos_pkey;
       public            postgres    false    220            X           2606    32984 (   consultas_soporte consultas_soporte_pkey 
   CONSTRAINT     o   ALTER TABLE ONLY public.consultas_soporte
    ADD CONSTRAINT consultas_soporte_pkey PRIMARY KEY (consulta_id);
 R   ALTER TABLE ONLY public.consultas_soporte DROP CONSTRAINT consultas_soporte_pkey;
       public            postgres    false    230            T           2606    32963    itinerarios itinerarios_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY public.itinerarios
    ADD CONSTRAINT itinerarios_pkey PRIMARY KEY (itinerario_id);
 F   ALTER TABLE ONLY public.itinerarios DROP CONSTRAINT itinerarios_pkey;
       public            postgres    false    226            P           2606    32945    pagos pagos_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.pagos
    ADD CONSTRAINT pagos_pkey PRIMARY KEY (pago_id);
 :   ALTER TABLE ONLY public.pagos DROP CONSTRAINT pagos_pkey;
       public            postgres    false    222            R           2606    32953    reembolsos reembolsos_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.reembolsos
    ADD CONSTRAINT reembolsos_pkey PRIMARY KEY (reembolso_id);
 D   ALTER TABLE ONLY public.reembolsos DROP CONSTRAINT reembolsos_pkey;
       public            postgres    false    224            L           2606    32919    reservas reservas_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.reservas
    ADD CONSTRAINT reservas_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.reservas DROP CONSTRAINT reservas_pkey;
       public            postgres    false    218            V           2606    32973    soporte soporte_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.soporte
    ADD CONSTRAINT soporte_pkey PRIMARY KEY (consulta_id);
 >   ALTER TABLE ONLY public.soporte DROP CONSTRAINT soporte_pkey;
       public            postgres    false    228            J           2606    32912    vuelos vuelos_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.vuelos
    ADD CONSTRAINT vuelos_pkey PRIMARY KEY (vuelo_id);
 <   ALTER TABLE ONLY public.vuelos DROP CONSTRAINT vuelos_pkey;
       public            postgres    false    216            Z           2606    32932    boletos boletos_vuelo_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.boletos
    ADD CONSTRAINT boletos_vuelo_id_fkey FOREIGN KEY (vuelo_id) REFERENCES public.vuelos(vuelo_id);
 G   ALTER TABLE ONLY public.boletos DROP CONSTRAINT boletos_vuelo_id_fkey;
       public          postgres    false    216    4682    220            Y           2606    32920    reservas reservas_vuelo_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.reservas
    ADD CONSTRAINT reservas_vuelo_id_fkey FOREIGN KEY (vuelo_id) REFERENCES public.vuelos(vuelo_id);
 I   ALTER TABLE ONLY public.reservas DROP CONSTRAINT reservas_vuelo_id_fkey;
       public          postgres    false    216    4682    218            �      x������ � �      �   O   x�3��*M�SH-J��<������|���Ԕ|���ܤ��"��L���Ԝ|{.#N�Ĥ�����|$eyɩ9H�b���� ���      �   �   x�]��
�0���)~:��'�I�.���8���!-)��T>�/f
Nn��ww�3E8��l�.م�T��ۭ�^%����f�yG S��<�.�V��@C�%ʶXc�VH�L�;e��薼l)/��L���9��(���Em�4R	�w��pο��1f      �   �   x���1
1 ��+����I�U�,,mr�'����?�؈��0Ð۶��vv�ݡ��-�O��������F�����RUr��G`�����[����UH�F� ~��ol�Q�GV�IM� ^��/C      �   �   x���;j1�Z:�.`1#��6E EH�ʍ�;ł�a�ȵr_̲&8,�v��c(��G����C;��1L&hY+��������1N���Q<�:r��|���4u���j��2s=���唫z��_7�� Q$��"�ĉ���"i!Lu�4nq�A������m��{�YG�6�o2ho��u��O��Lr���}D 'ޯj�q�����U涔�r�{-�� ���      �      x�3�4�tOL*�L������ $��      �   R   x�3�tOL*�L��I�K�W(�S((�O�I�MTH��S��T(J-N-*K��4202�54�50W04�25"=3S3KCs�=... ���      �   q   x�3��M�+I�)E�)�FF&������z\F��_�2��)Tޘ��	�sfiJb��#��Wdh�id
RdJ�"3N��������N�Ģ�Ԝ�<��� ����qqq �
2�     